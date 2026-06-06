# AGENTS.md

## Project Overview

This project is a collaborative online whiteboard inspired by Excalidraw, FigJam, and Miro.

The goal is to provide an infinite canvas where users can create diagrams, brainstorm ideas, draw shapes, add sticky notes, collaborate in real time, and eventually use AI-powered features.

The application is not intended to be a design tool like Figma. It is a whiteboarding and collaboration platform.

---

# Core Features

## Phase 1 (MVP)

* Infinite canvas
* Pan and zoom
* Shape creation
* Sticky notes
* Text blocks
* Selection and multi-selection
* Drag and resize
* Undo/redo
* Save and load boards
* Responsive UI

## Phase 2

* Real-time collaboration
* Presence indicators
* Live cursors
* Shared editing

## Phase 3

* AI-generated diagrams
* AI brainstorming
* AI sticky note clustering
* AI board summaries

---

# Tech Stack

## Frontend

* React
* TypeScript
* Vite
* Tailwind CSS
* tldraw
* Zustand

## Backend

* Node.js
* Express

## Realtime

* Socket.IO
* Yjs

## Database

* MongoDB

## Authentication

* JWT
* Google OAuth (future)

---

# Architecture

Frontend
├── Canvas (tldraw)
├── Toolbar
├── Sidebar
├── Zustand Store
└── Socket Client

Backend
├── REST API
├── Socket.IO Server
├── Yjs Sync Layer
└── MongoDB

---

# Important Principles

## Use tldraw Features First

Prefer built-in tldraw functionality before implementing custom canvas logic.

Do not recreate:

* zoom system
* shape rendering
* selection engine
* undo/redo engine
* viewport management

unless there is a strong product requirement.

---

## State Management

Use Zustand for application state.

Examples:

* current board
* active tool
* selected board
* user preferences
* sidebar visibility
* collaboration status

Do NOT duplicate canvas state already managed by tldraw.

---

## Collaboration

Yjs is the source of truth for collaborative document state.

Socket.IO is only the transport layer.

Do not implement manual conflict resolution.

Use CRDT synchronization through Yjs.

---

## Database Strategy

Persist board data to MongoDB.

Each board should contain:

* board metadata
* owner information
* collaborators
* timestamps
* serialized canvas state

Avoid storing unnecessary UI state.

---

# Folder Structure

src/

components/
canvas/
toolbar/
sidebar/
modals/

features/
boards/
auth/
collaboration/

store/
api/
hooks/
utils/
types/

server/

routes/
controllers/
services/
socket/
database/

---

# Coding Standards

## TypeScript

Use strict typing.

Avoid:

* any
* unknown casts
* non-null assertions

Prefer explicit interfaces.

Example:

interface Board {
id: string;
name: string;
createdAt: string;
updatedAt: string;
}

---

## Components

Keep components small and focused.

Prefer composition over large components.

Target:

* less than 300 lines per component

Extract reusable logic into hooks.

---

## State Updates

Use Zustand actions.

Avoid directly mutating state.

Good:

set((state) => ({
boards: [...state.boards, board]
}))

Bad:

state.boards.push(board)

---

## API Layer

All backend requests should go through dedicated API services.

Do not call fetch directly inside UI components.

Good:

api/boards.ts

Bad:

fetch(...) inside React components

---

# UI Guidelines

Design goals:

* clean
* modern
* minimal
* productivity focused

Inspired by:

* Excalidraw
* FigJam
* Linear
* Notion

Avoid excessive animations.

Performance is more important than visual effects.

---

# Performance Goals

Canvas interactions must remain smooth.

Avoid unnecessary React rerenders.

Use:

* memo
* useCallback
* useMemo

when profiling indicates benefits.

Optimize for boards containing thousands of shapes.

---

# Future AI Features

AI features should operate on structured board data.

AI should not generate images.

AI should generate:

* shapes
* notes
* diagrams
* connections
* board summaries

Example:

User Prompt:
"Create a system design for a MERN application."

Expected Output:

{
"nodes": [...],
"connections": [...]
}

The frontend converts this data into board elements.

---

# Non-Goals

Do not build:

* Figma clone
* Photoshop clone
* Video editor
* Presentation software

This project focuses on collaborative whiteboarding and brainstorming.

---

# Definition of Success

A user can:

1. Create a board
2. Draw and organize ideas
3. Collaborate with others in real time
4. Save and revisit boards
5. Generate diagrams with AI assistance

while maintaining a fast and intuitive user experience.
