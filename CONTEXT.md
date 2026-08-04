# KnowledgeOS

KnowledgeOS is a personal learning workspace that connects the materials, plans, and work a person uses to learn over time.

## Language

**Workspace**:
A single authenticated person's connected body of learning materials and planned work within KnowledgeOS. It is the ownership boundary for all KOS data.
_Avoid_: Second brain, vault, knowledge base

**KOS v1**:
The first daily-use release, centered on Dashboard, Courses, Notes, Tasks, Projects, Resources, files, global search, and the command palette.
_Avoid_: Prototype, MVP

**Link**:
A directed, typed association from one KOS entity to another, used for user-created cross-entity references and attachments.
_Avoid_: Relation, association, backlink

**Course**:
A structured learning curriculum composed of modules, lessons, and learning work. Its progress is derived from completed Lessons unless explicitly completed.
_Avoid_: Project, curriculum item

**Lesson**:
A discrete unit of learning within a Course module that can be completed.
_Avoid_: Assignment, resource

**Assignment**:
A course-associated piece of work with a due date or completion state that does not itself determine Course progress.
_Avoid_: Lesson, task

**Assignment task**:
A Task linked to an Assignment as an actionable step toward completing that deliverable.
_Avoid_: Assignment, subtask

**Project**:
An outcome-oriented workspace that organizes work, research, plans, and materials.
_Avoid_: Course, workspace

**Milestone**:
A dated Project roadmap outcome that may group zero or more Tasks.
_Avoid_: Task, deadline

**Roadmap**:
The ordered collection of a Project's Milestones.
_Avoid_: Task list, project plan

**Project note role**:
An optional Project-facing classification for a linked Note, such as architecture, research, or idea.
_Avoid_: Note type, separate note model

**Note**:
A personal knowledge document whose source of truth is GitHub-Flavored Markdown and whose tags and links are derived metadata.
_Avoid_: Page, document block

**Note template**:
A reusable Markdown starting point for creating a Note.
_Avoid_: Boilerplate, document template

**Backlink**:
A derived view of Links directed to a specific KOS entity.
_Avoid_: Reverse link, related item

**Revision**:
An immutable saved version of a Note's Markdown content.
_Avoid_: Draft, edit history

**Task**:
An actionable unit of work that may directly belong to one Course, one Project, both, or neither.
_Avoid_: Assignment, reminder

**Subtask**:
A Task nested beneath another Task to represent a smaller actionable unit of the same work.
_Avoid_: Checklist item

**Reminder**:
An in-app timestamp that surfaces a Task while KOS is open; it is independent of the Task due date.
_Avoid_: Notification, deadline

**Recurring Task**:
A series of Task occurrences generated from a recurrence rule, with each occurrence retaining its own status and history.
_Avoid_: Repeating task

**Occurrence**:
One scheduled instance in a Recurring Task series.
_Avoid_: Rescheduled task

**Resource**:
A catalogued learning or reference item, such as an article, book, repository, video, paper, documentation page, or PDF.
_Avoid_: File, attachment

**File**:
A stored binary attachment that supports a Resource or attaches directly to another KOS entity.
_Avoid_: Resource, document

**Tag**:
A workspace-owned label that can classify any major KOS entity.
_Avoid_: Folder, category

**Tag assignment**:
The application of one Tag to one KOS entity.
_Avoid_: Tag link

**Archive**:
A reversible inactive state that removes an item from active views while preserving it in the Workspace.
_Avoid_: Delete, trash

**Trash**:
A recoverable deletion state for an item that the user no longer wants in the Workspace.
_Avoid_: Archive, permanent deletion

**Active item**:
An item that is neither archived nor in Trash and is eligible for ordinary workspace views.
_Avoid_: Open item

**Study activity**:
An intentional learning event, initially a completed Lesson, Assignment, or Course/Project-associated Task.
_Avoid_: Activity, productivity event

**Study Streak**:
The consecutive number of local calendar days containing at least one Study activity.
_Avoid_: Productivity streak

**Global search**:
Workspace-scoped keyword retrieval across active KOS entities and their searchable content or metadata.
_Avoid_: Semantic search, command palette

**Search result**:
An entity returned by Global search with its type and matching context.
_Avoid_: Search item

**AI scope**:
The specific user-selected KOS items that may be supplied to an AI capability for one request.
_Avoid_: Workspace context, full-context access

**AI suggestion**:
An AI-produced draft or proposed action that does not change Workspace data until the user confirms it.
_Avoid_: AI action, automation

**Command Palette**:
The keyboard-first interface opened with ⌘K/Ctrl+K that combines navigation, Global search, and workspace actions.
_Avoid_: Search dialog, quick switcher

**Workspace action**:
An executable user command, such as creating a Note or navigating to an entity.
_Avoid_: Search result

**Desktop-first**:
A responsive web experience primarily optimized for desktop productivity layouts without an offline or native-app contract.
_Avoid_: Desktop application, offline-first

**User**:
An authenticated person who owns one personal Workspace.
_Avoid_: Account, member

**Session**:
The authenticated state that permits a User to access their Workspace.
_Avoid_: Login, authentication token

**Entity**:
The internal registry record that represents one linkable KOS item and provides the common ownership and relationship boundary.
_Avoid_: Model, resource

**Entity type**:
The kind of KOS item represented by an Entity.
_Avoid_: Category, tag

**Dashboard**:
A derived daily view of active Workspace data, not an independently stored domain entity.
_Avoid_: Home data, dashboard record
