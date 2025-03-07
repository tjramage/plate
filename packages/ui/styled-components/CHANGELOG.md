# @udecode/plate-styled-components

## 3.1.3

### Patch Changes

- Updated dependencies [[`f6c58134`](https://github.com/udecode/plate/commit/f6c581347cc5877b7afa0774ef1ad78ad227564e)]:
  - @udecode/plate-common@3.1.3

## 3.1.0

### Minor Changes

- [#980](https://github.com/udecode/plate/pull/980) [`03f2acdd`](https://github.com/udecode/plate/commit/03f2acdd1b34d1e4e574bcf296ae5b4796930c9a) Thanks [@cungminh2710](https://github.com/cungminh2710)! - `PortalBody` – New prop `element`: Allow to be mounted on a custom container. Using `document.body` can conflict with other portals with the same container.

## 3.0.1

### Patch Changes

- [#961](https://github.com/udecode/plate/pull/961) [`885a7799`](https://github.com/udecode/plate/commit/885a77995619c99293403b4a7ee0019eecf3dfd0) Thanks [@zbeyens](https://github.com/zbeyens)! - upgrade `styled-components` to 5.3.1

## 3.0.0

### Major Changes

- [#955](https://github.com/udecode/plate/pull/955) [`348f7efb`](https://github.com/udecode/plate/commit/348f7efb9276735d8282652db1516b46c364b6ed) Thanks [@zbeyens](https://github.com/zbeyens)! - WHAT: moved `styled-components` from dependencies to peer dependencies.
  WHY: there was multiple instances of `styled-components` across all the packages.
  HOW: make sure to have `styled-components` in your dependencies.

## 2.0.0

### Patch Changes

- Updated dependencies [[`ec4d5b7b`](https://github.com/udecode/plate/commit/ec4d5b7bd01b6fd21ba14a28f782c143d32c7532)]:
  - @udecode/plate-common@2.0.0

## 1.1.7

### Patch Changes

- [#920](https://github.com/udecode/plate/pull/920) [`10064d24`](https://github.com/udecode/plate/commit/10064d24dde293768452abb7c853dc75cbde2c78) Thanks [@zbeyens](https://github.com/zbeyens)! - add `slate-history` as a peerDep

## 1.1.6

### Patch Changes

- Updated dependencies [[`7d045d8d`](https://github.com/udecode/plate/commit/7d045d8db39515d4574c5313cc97287486c5866b)]:
  - @udecode/plate-common@1.1.6

## 1.0.0

### Major Changes

🎉 The **Slate Plugins** project has evolved to **Plate** 🎉

To migrate, install `@udecode/plate[-x]` then find and replace all
occurrences of:

- `slate-plugins` to `plate`
- `SlatePlugins` to `Plate`
- `SlatePlugin` to `PlatePlugin`

## 1.0.0-next.61

> This is the last version of `@udecode/slate-plugins[-x]`, please install
> `@udecode/plate[-x]`.

### Patch Changes

- Updated dependencies [[`7c26cf32`](https://github.com/udecode/slate-plugins/commit/7c26cf32e8b501d531c6d823ab55bf361e228bc3)]:
  - @udecode/slate-plugins-core@1.0.0-next.61
  - @udecode/slate-plugins-common@1.0.0-next.61

## 1.0.0-next.59

### Patch Changes

- Updated dependencies [[`3a3eb1b8`](https://github.com/udecode/slate-plugins/commit/3a3eb1b8565789b7ba49e8170479df8245ed5b22)]:
  - @udecode/slate-plugins-common@1.0.0-next.59

## 1.0.0-next.56

### Patch Changes

- Updated dependencies [[`75b39f18`](https://github.com/udecode/slate-plugins/commit/75b39f18901d38f80847573cd3431ece1d1d4b3d)]:
  - @udecode/slate-plugins-core@1.0.0-next.56
  - @udecode/slate-plugins-common@1.0.0-next.56

## 1.0.0-next.55

### Patch Changes

- Updated dependencies [[`abaf4a11`](https://github.com/udecode/slate-plugins/commit/abaf4a11d3b69157983b6cf77b023a6008478a79)]:
  - @udecode/slate-plugins-core@1.0.0-next.55
  - @udecode/slate-plugins-common@1.0.0-next.55

## 1.0.0-next.54

### Minor Changes

- [`f9e4cb95`](https://github.com/udecode/slate-plugins/commit/f9e4cb9505837dd7ba59df3f2598f7ed112d8896) Thanks [@zbeyens](https://github.com/zbeyens)! - features:
  - `withStyledProps`(new): HOC mapping element/leaf props to component styles

### Patch Changes

- Updated dependencies [[`d906095d`](https://github.com/udecode/slate-plugins/commit/d906095d20cf8755a200d254f6c20c510a748f29)]:
  - @udecode/slate-plugins-common@1.0.0-next.54

## 1.0.0-next.53

### Patch Changes

- Updated dependencies [[`42360b44`](https://github.com/udecode/slate-plugins/commit/42360b444d6a2959847d5619eda32319e360e3af)]:
  - @udecode/slate-plugins-core@1.0.0-next.53
  - @udecode/slate-plugins-common@1.0.0-next.53

## 1.0.0-next.51

### Major Changes

- [#799](https://github.com/udecode/slate-plugins/pull/799) [`0c02cee8`](https://github.com/udecode/slate-plugins/commit/0c02cee8cc7b105ab27a329882991d86253c0517) Thanks [@zbeyens](https://github.com/zbeyens)! - Replace fluent-ui by styled-components + twin.macro
