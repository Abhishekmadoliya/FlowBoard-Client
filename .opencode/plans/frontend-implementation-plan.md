# Frontend Completion Plan — Flowboard

## Status Summary

### ✅ Completed
- Lint errors fixed (6 errors, 4 warnings resolved)
- Zustand installed (`v5.0.14`)
- App store created (`lib/store/useAppStore.ts`) with persist middleware
- Board utilities (`lib/utils/boards.ts`) — `createBoard()`, `generateBoardName()`, `formatRelativeDate()`
- AppShell sidebar layout (`components/app/AppShell.tsx`) with navigation

### ❌ Remaining

---

## 1. Dashboard — `/app/page.tsx`

**Goal:** Replace the current whiteboard-at-`/app` with a board grid dashboard.

**Steps:**
1. Create `components/app/dashboard/BoardGrid.tsx`:
   - Search bar filtering boards by name
   - Grid of board cards (thumbnail color, name, relative date, delete button)
   - Empty state with "Create your first board" CTA
   - "New board" button that calls `createBoard()`, adds to store, navigates to `/board/{id}`
2. Rewrite `app/app/page.tsx` to render `<AppShell><BoardGrid /></AppShell>`

**Files to create/modify:**
- `components/app/dashboard/BoardGrid.tsx` (NEW)
- `app/app/page.tsx` (REWRITE)

---

## 2. Whiteboard Route — `/board/[id]/page.tsx`

**Goal:** Dynamic route for individual boards with full whiteboard.

**Steps:**
1. Create `app/board/[id]/page.tsx` — client component that reads `params.id`, renders `<Whiteboard boardId={id} />`
2. Whiteboard should NOT wrap in AppShell (full-screen canvas)

**Files to create:**
- `app/board/[id]/page.tsx` (NEW)

---

## 3. Wire Whiteboard to tldraw API

**Goal:** Make all custom chrome components functional by connecting to the tldraw `Editor` instance.

**Steps:**
1. In `Whiteboard.tsx`, use tldraw's `useEditor()` or the `onMount` callback to get the editor ref.
2. Use `hideUi` prop on `<Tldraw>` to suppress tldraw's built-in UI (so only our custom chrome shows).
3. Pass editor state down via props or store:
   - `activeTool` → connect `TopToolbar` button clicks to `editor.setCurrentTool(toolId)`
   - `zoom` → read from `editor.getCamera().z`, use `editor.setCamera()` on zoom +/- clicks
   - Selection → `LeftSidebar` shows layers from `editor.getSortedChildIds()` and `editor.getShape(id)`
   - `PropertiesPanel` shows fill/stroke of selected shape via `editor.getOnlySelectedShape()`
4. Make `BoardHeader` editable and persist name back to store with `renameBoard()`
5. Make `StatusBar` show real multiplayer status and comment count
6. Ensure tldraw canvas fills the screen behind the chrome overlays (absolute/fixed)

**tldraw tool IDs for `setCurrentTool`:**
- `select` → `"select"`
- `hand` → `"hand"`
- `frame` → `"frame"`
- `sticky` → `"note"`
- `shape` → `"rectangle"` (or `"ellipse"`, `"diamond"`)
- `connector` → `"arrow"` or `"line"`
- `pen` → `"draw"`
- `text` → `"text"`
- `eraser` → `"eraser"`
- `image` → not a built-in tool, handle via custom action

**Files to modify:**
- `components/app/whiteboard/Whiteboard.tsx` (REWRITE — use `onMount`, `hideUi`, pass editor to children)
- `components/app/whiteboard/TopToolbar.tsx` (MODIFY — accept `editor` prop, wire tool/zoom)
- `components/app/whiteboard/BoardHeader.tsx` (MODIFY — accept `boardId`, use store renameBoard)
- `components/app/whiteboard/LeftSidebar.tsx` (MODIFY — accept editor, show real layers)
- `components/app/whiteboard/PropertiesPanel.tsx` (MODIFY — accept editor, show selected shape props)
- `components/app/whiteboard/StatusBar.tsx` (MODIFY — show real data)
- `components/app/whiteboard/MiniMap.tsx` (MODIFY — optional, keep static for now)

---

## 4. Onboarding Pages — `/setup` and `/invite`

**Goal:** Create two missing onboarding routes that use existing components.

**Steps:**
1. Create `app/setup/page.tsx`:
   - Client component rendering `<OnboardingSteps currentStep={2} />` + `<WorkspaceSetup />`
   - On submit, saves workspace name to store (`setUser` with workspaceName)
   - Redirects to `/invite`
2. Create `app/invite/page.tsx`:
   - Client component rendering `<OnboardingSteps currentStep={3} />` + `<InviteTeam />`
   - "Get started" button redirects to `/app`

**Files to create:**
- `app/setup/page.tsx` (NEW)
- `app/invite/page.tsx` (NEW)

---

## 5. Wire Auth Forms

**Goal:** Make login/signup actually functional with store and redirects.

**Steps:**
1. In `SignupForm.tsx`:
   - On form submit (prevent default), set a mock user in store:
     ```ts
     setUser({
       id: "user-" + Date.now(),
       email: formEmail,
       name: formEmail.split("@")[0],
       workspaceName: "Personal",
     })
     ```
   - Redirect to `/setup` via `useRouter().push("/setup")`
2. In `LoginForm.tsx`:
   - On form submit, set mock user, redirect to `/app`
3. In `AppShell.tsx`:
   - If no user is set, redirect to `/login` (optional — nice-to-have guard)

**Files to modify:**
- `components/auth/SignupForm.tsx` (MODIFY — add submit handler)
- `components/auth/LoginForm.tsx` (MODIFY — add submit handler)
- `components/auth/WorkspaceSetup.tsx` (MODIFY — add submit handler, accept `onContinue` prop)
- `components/auth/InviteTeam.tsx` (MODIFY — "Get started" already links to `/app`, just ensure store is set)

---

## 6. Create Board Flow

**Goal:** Allow creating boards from dashboard and from sidebar "New board" button.

**Steps:**
1. AppShell "New board" button already links to `/app/new`
2. Create `app/app/new/page.tsx` — immediately creates board and redirects to `/board/{id}`
3. Or simpler: just make it a client component that calls `createBoard()` then `router.push()`

**Files to create/modify:**
- `app/app/new/page.tsx` (NEW — redirecting page)

---

## 7. Final Polish & Verification

**Goal:** Ensure everything builds cleanly.

**Steps:**
1. Run `pnpm lint` — fix any remaining issues
2. Run `pnpm build` — confirm zero errors
3. Test navigation flow: Landing → Signup → Setup → Invite → Dashboard → Board → Back to Dashboard

---

## Route Map (final)

| Route | Page | Component |
|-------|------|-----------|
| `/` | Landing | Navbar, Hero, Features, etc. |
| `/login` | Login | AuthSidePanel + LoginForm |
| `/signup` | Signup | AuthSidePanel + OnboardingSteps[1] + SignupForm |
| `/setup` | Workspace Setup | OnboardingSteps[2] + WorkspaceSetup |
| `/invite` | Invite Team | OnboardingSteps[3] + InviteTeam |
| `/app` | Dashboard | AppShell + BoardGrid |
| `/app/new` | Create Board | Redirect to /board/{id} |
| `/board/[id]` | Whiteboard | Full-screen Tldraw + custom chrome |

## Component Tree

```
_app (RootLayout)
├── / → LandingPage
│   ├── Navbar
│   ├── HeroSection
│   ├── LogoBar
│   ├── FeatureGrid
│   ├── SeeItInAction
│   ├── TemplateGallery
│   ├── Testimonials
│   ├── CtaBanner
│   └── Footer
│
├── /login → LoginPage
│   ├── AuthSidePanel
│   └── LoginForm (wired to store)
│
├── /signup → SignupPage
│   ├── AuthSidePanel
│   ├── OnboardingSteps[1]
│   └── SignupForm (wired to store)
│
├── /setup → SetupPage
│   ├── OnboardingSteps[2]
│   └── WorkspaceSetup (wired)
│
├── /invite → InvitePage
│   ├── OnboardingSteps[3]
│   └── InviteTeam
│
├── /app → DashboardPage
│   └── AppShell
│       └── BoardGrid
│
└── /board/[id] → BoardPage
    └── Whiteboard (full-screen)
        ├── BoardHeader (editable, wired to store)
        ├── TopToolbar (wired to editor)
        ├── CollaboratorBar
        ├── LeftSidebar (wired to editor shapes)
        ├── PropertiesPanel (wired to editor selection)
        ├── MiniMap (static)
        ├── StatusBar (wired to editor)
        └── <Tldraw hideUi /> (the canvas)
```

## Data Flow

```
Zustand Store (persisted to localStorage)
  ├── user: { id, email, name, workspaceName }
  ├── boards: Board[] (with metadata only)
  ├── isSidebarOpen: boolean
  └── activeTool: string (synced with tldraw)

tldraw Editor (in-memory only, via Yjs/DOC in future)
  ├── shapes, bindings, assets
  ├── camera (zoom/pan)
  ├── current tool
  └── selection

Store ↔ Editor sync:
  - TopToolbar: click → store.setActiveTool(id) + editor.setCurrentTool(id)
  - editor.on('change') → update store.activeTool
  - editor.on('change') → update zoom display
  - Editor `onMount` → store editor ref for children
```
