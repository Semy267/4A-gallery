# Changelog

all notable changes to this project will be documented in this file.

# [0.1.0] - 2025-07-05

- (Refactor) - Update dot and arrow variant carousel more flexible
- (Refactor) - Update types carousel

# [0.1.0] - 2025-06-28

- (Feat) - cradio and cchecbox
- (Feat) - cradio-form and ccheckbox-form
- (Refactor) - move all input field to folder form/

# [0.1.0] - 2025-06-26

- (Feat) - put dialog and drawer (become overlay wrapper)
- (Feat) - make overlay flexible
- (Style) - update ui and fix functionality both dialog and drawer
- (Refactor) - update cbutton types using buttonVariant types over write manualy
- (Style) - update name variant button and ui
- (Refactor) - remove cdialog, cdialog and dialog.module.css

# [0.1.0] - 2025-06-20

- (Feat) - CSelectMulti
- (Chore) - update react-day-picker to latest
- (Refactor) - update daypicker for more flexible
- (Fix) - update validation onChange year and mond based min and max date

# [0.1.0] - 2025-06-20

- (Chore) - update next and react to latest

# [0.1.0] - 2025-06-1

- (Feat) - show demo table
- (Feat) - formattedDate utils

# [0.1.0] - 2025-05-31

- (Fix) - carousel behavior (not show the correct index)
- (Fix) - typo disable it should be disabled on pagination

# [0.1.0] - 2025-05-30

- (Feat) - update custome input (more flexible)
- (Refactor) - update filename textarea
- (Refactor) - reorganize cdialog and cdrawer comp

# [0.1.0] - 2025-05-29

- (Feat) - custom date picker (color)
- (Feat) - custome select (more flexible)
- (Wip) - update custome input

# [0.1.0] - 2025-05-26

- (Wip) - custom date picker

# [0.1.0] - 2025-05-24

- (Wip) - custom date picker

# [0.1.0] - 2025-05-08

- (Feat) - custome popover

# [0.1.0] - 2025-05-08

### Added

- (Feat) Other variant of carousel

## [0.1.0] - 2025-04-27

### Addedd

- Textarea

## [0.1.0] - 2025-04-27

### Addedd

- Custome Dropdown

### Chore

- Install dropdown-menu
- Update color
- Update format CHANGELOG
- Update tailwindCSS to v4

## [0.1.0] - 2025-04-26

### Added

- Added `use-media` library.
- Added `useBreakpoint` hook.
- Added custom Carousel component (incomplete, but usable).
- Added Pagination component and styles.
- Added custom Select component.
- Added Tanstack Form integration.
- Added compound components.
- Moved to `pnpm`.

### Changed

- Updated `README.md`.
- Changed TS config path from `@*` to `@/`.
- Updated all component import paths.
- Renamed `useStore` to `store`.
- Updated `CButton` types to accept `title` or `children`.
- Updated project to Next.js 15.
- Updated Modal and Drawer identifiers (`modalName`, `drawerName` → `id`).
- Refactored custom Input and Select components for better reusability.
- Changed validation from `react-hook-form` to `tanstack/form`.
- Combined Dialog and Drawer components into a single import.
- Improved UI styles for Drawer, Dialog, Inputs, and Selects.
- Added Esc key and outside click to close Drawer.

### Fixed

- Fixed image export path issues.
- Resolved merge conflicts with `dev` branch.
- Fixed img path errors.
- Fixed type and key errors.
- Fixed Zod validation for empty strings.

### Refactored

- Removed TODOs from README.
- Made custom Input component reusable and standardized.
- Moved custom carousel types to `global.d.ts`.
- Updated how form errors are displayed.

### Chore

- Added Husky integration.
