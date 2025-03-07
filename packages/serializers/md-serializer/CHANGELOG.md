# @udecode/plate-md-serializer

## 3.1.3

### Patch Changes

- Updated dependencies [[`f6c58134`](https://github.com/udecode/plate/commit/f6c581347cc5877b7afa0774ef1ad78ad227564e), [`d73b22d0`](https://github.com/udecode/plate/commit/d73b22d03a0fc270265cbd1bdecfcc4adc70b9d8)]:
  - @udecode/plate-common@3.1.3
  - @udecode/plate-list@3.1.3
  - @udecode/plate-block-quote@3.1.3
  - @udecode/plate-code-block@3.1.3
  - @udecode/plate-heading@3.1.3
  - @udecode/plate-link@3.1.3
  - @udecode/plate-paragraph@3.1.3
  - @udecode/plate-serializer@3.1.3

## 3.1.2

### Patch Changes

- Updated dependencies [[`2906a0a4`](https://github.com/udecode/plate/commit/2906a0a45fa00b38a1e71ed8e3c57203f429db4d)]:
  - @udecode/plate-list@3.1.2

## 3.0.5

### Patch Changes

- [#974](https://github.com/udecode/plate/pull/974) [`7cffccb2`](https://github.com/udecode/plate/commit/7cffccb29aa1a1ab00e29b12c48c486b67d3c873) Thanks [@dylans](https://github.com/dylans)! - markdown deserializer was favoring URL over files when pasting content

## 3.0.4

### Patch Changes

- Updated dependencies [[`46398095`](https://github.com/udecode/plate/commit/4639809567e4c96d58912c2a16e74948474d4547)]:
  - @udecode/plate-list@3.0.4

## 2.0.0

### Patch Changes

- Updated dependencies [[`ec4d5b7b`](https://github.com/udecode/plate/commit/ec4d5b7bd01b6fd21ba14a28f782c143d32c7532)]:
  - @udecode/plate-common@2.0.0
  - @udecode/plate-block-quote@2.0.0
  - @udecode/plate-code-block@2.0.0
  - @udecode/plate-heading@2.0.0
  - @udecode/plate-link@2.0.0
  - @udecode/plate-list@2.0.0
  - @udecode/plate-paragraph@2.0.0
  - @udecode/plate-serializer@2.0.0

## 1.1.8

### Patch Changes

- Updated dependencies [[`a3825e35`](https://github.com/udecode/plate/commit/a3825e3556e9980b8cce39d454aa4d3c8ea78586)]:
  - @udecode/plate-list@1.1.8

## 1.1.6

### Patch Changes

- Updated dependencies [[`7d045d8d`](https://github.com/udecode/plate/commit/7d045d8db39515d4574c5313cc97287486c5866b)]:
  - @udecode/plate-common@1.1.6
  - @udecode/plate-block-quote@1.1.6
  - @udecode/plate-code-block@1.1.6
  - @udecode/plate-heading@1.1.6
  - @udecode/plate-link@1.1.6
  - @udecode/plate-list@1.1.6
  - @udecode/plate-paragraph@1.1.6
  - @udecode/plate-serializer@1.1.6

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

### Major Changes

- [#869](https://github.com/udecode/slate-plugins/pull/869) [`fd91359d`](https://github.com/udecode/slate-plugins/commit/fd91359dc3722292cee06e0f80ed414934b27572) Thanks [@zbeyens](https://github.com/zbeyens)! - Removed `getFragment` and `insert` option in favor of the new plugin options.

### Patch Changes

- Updated dependencies [[`546ee49b`](https://github.com/udecode/slate-plugins/commit/546ee49b1e22464a8a0c0fad7f254da85bcfde3d), [`7c26cf32`](https://github.com/udecode/slate-plugins/commit/7c26cf32e8b501d531c6d823ab55bf361e228bc3)]:
  - @udecode/slate-plugins-serializer@1.0.0-next.61
  - @udecode/slate-plugins-core@1.0.0-next.61
  - @udecode/slate-plugins-common@1.0.0-next.61
  - @udecode/slate-plugins-block-quote@1.0.0-next.61
  - @udecode/slate-plugins-code-block@1.0.0-next.61
  - @udecode/slate-plugins-heading@1.0.0-next.61
  - @udecode/slate-plugins-link@1.0.0-next.61
  - @udecode/slate-plugins-list@1.0.0-next.61
  - @udecode/slate-plugins-paragraph@1.0.0-next.61

## 1.0.0-next.60

### Minor Changes

- [#864](https://github.com/udecode/slate-plugins/pull/864) [`37a52994`](https://github.com/udecode/slate-plugins/commit/37a529945a882adb0222b47a28466dd31286a354) Thanks [@dylans](https://github.com/dylans)! - Refactor insert for deserializers

## 1.0.0-next.59

### Patch Changes

- Updated dependencies [[`3a3eb1b8`](https://github.com/udecode/slate-plugins/commit/3a3eb1b8565789b7ba49e8170479df8245ed5b22)]:
  - @udecode/slate-plugins-common@1.0.0-next.59
  - @udecode/slate-plugins-block-quote@1.0.0-next.59
  - @udecode/slate-plugins-code-block@1.0.0-next.59
  - @udecode/slate-plugins-heading@1.0.0-next.59
  - @udecode/slate-plugins-link@1.0.0-next.59
  - @udecode/slate-plugins-list@1.0.0-next.59
  - @udecode/slate-plugins-paragraph@1.0.0-next.59

## 1.0.0-next.58

### Patch Changes

- [#860](https://github.com/udecode/slate-plugins/pull/860) [`db6371c3`](https://github.com/udecode/slate-plugins/commit/db6371c36e389cb03901a119194dd93652134554) Thanks [@dylans](https://github.com/dylans)! - wrap paste deserialization in withoutNormalization block to prevent paste errors

## 1.0.0-next.57

### Patch Changes

- Updated dependencies [[`5abacbc2`](https://github.com/udecode/slate-plugins/commit/5abacbc23af67f9388536f73076d026b89b24c5c)]:
  - @udecode/slate-plugins-list@1.0.0-next.57

## 1.0.0-next.56

### Patch Changes

- Updated dependencies [[`75b39f18`](https://github.com/udecode/slate-plugins/commit/75b39f18901d38f80847573cd3431ece1d1d4b3d)]:
  - @udecode/slate-plugins-core@1.0.0-next.56
  - @udecode/slate-plugins-common@1.0.0-next.56
  - @udecode/slate-plugins-block-quote@1.0.0-next.56
  - @udecode/slate-plugins-code-block@1.0.0-next.56
  - @udecode/slate-plugins-heading@1.0.0-next.56
  - @udecode/slate-plugins-link@1.0.0-next.56
  - @udecode/slate-plugins-list@1.0.0-next.56
  - @udecode/slate-plugins-paragraph@1.0.0-next.56

## 1.0.0-next.55

### Patch Changes

- Updated dependencies [[`abaf4a11`](https://github.com/udecode/slate-plugins/commit/abaf4a11d3b69157983b6cf77b023a6008478a79)]:
  - @udecode/slate-plugins-core@1.0.0-next.55
  - @udecode/slate-plugins-common@1.0.0-next.55
  - @udecode/slate-plugins-block-quote@1.0.0-next.55
  - @udecode/slate-plugins-code-block@1.0.0-next.55
  - @udecode/slate-plugins-heading@1.0.0-next.55
  - @udecode/slate-plugins-link@1.0.0-next.55
  - @udecode/slate-plugins-list@1.0.0-next.55
  - @udecode/slate-plugins-paragraph@1.0.0-next.55

## 1.0.0-next.54

### Patch Changes

- Updated dependencies [[`477bab57`](https://github.com/udecode/slate-plugins/commit/477bab572d943b21d3390c440f28e76074484a56), [`d906095d`](https://github.com/udecode/slate-plugins/commit/d906095d20cf8755a200d254f6c20c510a748f29)]:
  - @udecode/slate-plugins-list@1.0.0-next.54
  - @udecode/slate-plugins-common@1.0.0-next.54
  - @udecode/slate-plugins-block-quote@1.0.0-next.54
  - @udecode/slate-plugins-code-block@1.0.0-next.54
  - @udecode/slate-plugins-heading@1.0.0-next.54
  - @udecode/slate-plugins-link@1.0.0-next.54
  - @udecode/slate-plugins-paragraph@1.0.0-next.54

## 1.0.0-next.53

### Patch Changes

- Updated dependencies [[`42360b44`](https://github.com/udecode/slate-plugins/commit/42360b444d6a2959847d5619eda32319e360e3af)]:
  - @udecode/slate-plugins-core@1.0.0-next.53
  - @udecode/slate-plugins-common@1.0.0-next.53
  - @udecode/slate-plugins-block-quote@1.0.0-next.53
  - @udecode/slate-plugins-code-block@1.0.0-next.53
  - @udecode/slate-plugins-heading@1.0.0-next.53
  - @udecode/slate-plugins-link@1.0.0-next.53
  - @udecode/slate-plugins-list@1.0.0-next.53
  - @udecode/slate-plugins-paragraph@1.0.0-next.53

## 1.0.0-next.48

### Minor Changes

- [#821](https://github.com/udecode/slate-plugins/pull/821) [`091f0940`](https://github.com/udecode/slate-plugins/commit/091f0940bd3c06c3dfaf49a4ab14eb611678637d) Thanks [@dylans](https://github.com/dylans)! - If empty fragment, eject from deserializer

### Patch Changes

- [#819](https://github.com/udecode/slate-plugins/pull/819) [`b82f47a6`](https://github.com/udecode/slate-plugins/commit/b82f47a66ea1521dc426ae87e1ec37f004593cbe) Thanks [@dylans](https://github.com/dylans)! - Markdown deserializer was breaking the pasting of a simple URL into the editor. Now checks the content and if it's simply a URL, it skips the handling of the content as markdown

- Updated dependencies [[`a15ab621`](https://github.com/udecode/slate-plugins/commit/a15ab6217c6e2d4eb2a1320f6b76c483fc963047)]:
  - @udecode/slate-plugins-list@1.0.0-next.48

## 1.0.0-next.47

### Minor Changes

- [#813](https://github.com/udecode/slate-plugins/pull/813) [`2d671565`](https://github.com/udecode/slate-plugins/commit/2d67156509ca8689aede2d4a9a45f749772c789c) Thanks [@dylans](https://github.com/dylans)! - Fix ast-deserialize insert, minor cleanup to html/md deserializer

- [#814](https://github.com/udecode/slate-plugins/pull/814) [`1bbdae38`](https://github.com/udecode/slate-plugins/commit/1bbdae389e7ec3ec7a54877526055a9464e46fdf) Thanks [@dylans](https://github.com/dylans)! - allow override of fragment root for deserializers

## 1.0.0-next.46

### Patch Changes

- Updated dependencies [[`6e9068f6`](https://github.com/udecode/slate-plugins/commit/6e9068f6f483b698b6b3aae6819333103504f41b)]:
  - @udecode/slate-plugins-common@1.0.0-next.46
  - @udecode/slate-plugins-block-quote@1.0.0-next.46
  - @udecode/slate-plugins-code-block@1.0.0-next.46
  - @udecode/slate-plugins-heading@1.0.0-next.46
  - @udecode/slate-plugins-link@1.0.0-next.46
  - @udecode/slate-plugins-list@1.0.0-next.46
  - @udecode/slate-plugins-paragraph@1.0.0-next.46

## 1.0.0-next.44

### Patch Changes

- [#801](https://github.com/udecode/slate-plugins/pull/801) [`7f5f223d`](https://github.com/udecode/slate-plugins/commit/7f5f223d39e0b6a6381d42d1a95d73592960319a) Thanks [@dylans](https://github.com/dylans)! - Make markdown deserializer more consistent in approach with html and ast deserializers

## 1.0.0-next.43

### Patch Changes

- Updated dependencies [[`e70f8043`](https://github.com/udecode/slate-plugins/commit/e70f8043125d06161fa3ea5d47810749782e0a8a)]:
  - @udecode/slate-plugins-list@1.0.0-next.43

## 1.0.0-next.42

### Patch Changes

- Updated dependencies [[`e10f2fa4`](https://github.com/udecode/slate-plugins/commit/e10f2fa4963efdfef9e642a5125942c4819cfe9c), [`558a89da`](https://github.com/udecode/slate-plugins/commit/558a89da4217e9be57bc6ab2abcc48482c9f60bd)]:
  - @udecode/slate-plugins-list@1.0.0-next.42

## 1.0.0-next.40

### Patch Changes

- Updated dependencies [[`15048e6f`](https://github.com/udecode/slate-plugins/commit/15048e6facbefc5fe21b0b9bd9a586f269cada89)]:
  - @udecode/slate-plugins-core@1.0.0-next.40
  - @udecode/slate-plugins-common@1.0.0-next.40
  - @udecode/slate-plugins-block-quote@1.0.0-next.40
  - @udecode/slate-plugins-code-block@1.0.0-next.40
  - @udecode/slate-plugins-heading@1.0.0-next.40
  - @udecode/slate-plugins-link@1.0.0-next.40
  - @udecode/slate-plugins-list@1.0.0-next.40
  - @udecode/slate-plugins-paragraph@1.0.0-next.40

## 1.0.0-next.39

### Patch Changes

- Updated dependencies [[`b444071e`](https://github.com/udecode/slate-plugins/commit/b444071e2673803dba05c770c5dfbbde14f7a631)]:
  - @udecode/slate-plugins-core@1.0.0-next.39
  - @udecode/slate-plugins-common@1.0.0-next.39
  - @udecode/slate-plugins-block-quote@1.0.0-next.39
  - @udecode/slate-plugins-code-block@1.0.0-next.39
  - @udecode/slate-plugins-heading@1.0.0-next.39
  - @udecode/slate-plugins-link@1.0.0-next.39
  - @udecode/slate-plugins-list@1.0.0-next.39
  - @udecode/slate-plugins-paragraph@1.0.0-next.39

## 1.0.0-next.38

### Patch Changes

- Updated dependencies [[`f4c3b4fb`](https://github.com/udecode/slate-plugins/commit/f4c3b4fbe1f8c057f3f2d33ee4f8a6ae9768f9bf), [`317f6205`](https://github.com/udecode/slate-plugins/commit/317f620598d19f2f9ebf01b4f92256bf0ca05097)]:
  - @udecode/slate-plugins-list@1.0.0-next.38

## 1.0.0-next.37

### Patch Changes

- Updated dependencies [[`2cf618c3`](https://github.com/udecode/slate-plugins/commit/2cf618c3a0220ca03c1d95e0b51d1ff58d73578c)]:
  - @udecode/slate-plugins-common@1.0.0-next.37
  - @udecode/slate-plugins-block-quote@1.0.0-next.37
  - @udecode/slate-plugins-code-block@1.0.0-next.37
  - @udecode/slate-plugins-heading@1.0.0-next.37
  - @udecode/slate-plugins-link@1.0.0-next.37
  - @udecode/slate-plugins-list@1.0.0-next.37
  - @udecode/slate-plugins-paragraph@1.0.0-next.37

## 1.0.0-next.36

### Patch Changes

- Updated dependencies [[`7cbd7bd9`](https://github.com/udecode/slate-plugins/commit/7cbd7bd95b64e06fde38dcd68935984de8f3a82f), [`806e1632`](https://github.com/udecode/slate-plugins/commit/806e16322e655802822079d8540a6983a9dfb06e)]:
  - @udecode/slate-plugins-common@1.0.0-next.36
  - @udecode/slate-plugins-core@1.0.0-next.36
  - @udecode/slate-plugins-block-quote@1.0.0-next.36
  - @udecode/slate-plugins-code-block@1.0.0-next.36
  - @udecode/slate-plugins-heading@1.0.0-next.36
  - @udecode/slate-plugins-link@1.0.0-next.36
  - @udecode/slate-plugins-list@1.0.0-next.36
  - @udecode/slate-plugins-paragraph@1.0.0-next.36

## 1.0.0-next.32

### Patch Changes

- Updated dependencies [[`73b77853`](https://github.com/udecode/slate-plugins/commit/73b77853cb38f61d4bfb31a0d604e947c130ee0f)]:
  - @udecode/slate-plugins-block-quote@1.0.0-next.32
  - @udecode/slate-plugins-code-block@1.0.0-next.32
  - @udecode/slate-plugins-link@1.0.0-next.32
  - @udecode/slate-plugins-list@1.0.0-next.32

## 1.0.0-next.31

### Patch Changes

- Updated dependencies [[`15cdf5d7`](https://github.com/udecode/slate-plugins/commit/15cdf5d7614734c78c31f290586d0d64b0cff3fd)]:
  - @udecode/slate-plugins-list@1.0.0-next.31

## 1.0.0-next.30

### Patch Changes

- Updated dependencies [[`84b5feed`](https://github.com/udecode/slate-plugins/commit/84b5feedd20b12f0ec23e082d90314b045a69e62), [`33605a49`](https://github.com/udecode/slate-plugins/commit/33605a495ccc3fd9b4f6cfdaf2eb0e6e59bd7a67), [`28f30c8a`](https://github.com/udecode/slate-plugins/commit/28f30c8a6b0a2d245d6f6403c8399f2e59d98b92), [`75e6d25d`](https://github.com/udecode/slate-plugins/commit/75e6d25de0f9cf2487adecff54c2993ebc795aa0)]:
  - @udecode/slate-plugins-list@1.0.0-next.30
  - @udecode/slate-plugins-core@1.0.0-next.30
  - @udecode/slate-plugins-common@1.0.0-next.30
  - @udecode/slate-plugins-code-block@1.0.0-next.30
  - @udecode/slate-plugins-block-quote@1.0.0-next.30
  - @udecode/slate-plugins-heading@1.0.0-next.30
  - @udecode/slate-plugins-link@1.0.0-next.30
  - @udecode/slate-plugins-paragraph@1.0.0-next.30

## 1.0.0-next.29

### Patch Changes

- Updated dependencies [[`dfbde8bd`](https://github.com/udecode/slate-plugins/commit/dfbde8bd856e1e646e3d8fe2cbf1df8f9b8c67c3), [`dfbde8bd`](https://github.com/udecode/slate-plugins/commit/dfbde8bd856e1e646e3d8fe2cbf1df8f9b8c67c3)]:
  - @udecode/slate-plugins-core@1.0.0-next.29
  - @udecode/slate-plugins-common@1.0.0-next.29
  - @udecode/slate-plugins-block-quote@1.0.0-next.29
  - @udecode/slate-plugins-code-block@1.0.0-next.29
  - @udecode/slate-plugins-heading@1.0.0-next.29
  - @udecode/slate-plugins-link@1.0.0-next.29
  - @udecode/slate-plugins-list@1.0.0-next.29
  - @udecode/slate-plugins-paragraph@1.0.0-next.29

## 1.0.0-next.27

### Patch Changes

- Updated dependencies [[`88d49713`](https://github.com/udecode/slate-plugins/commit/88d497138c2f8a1ce51af6910c5052b1ddf8dabc)]:
  - @udecode/slate-plugins-list@1.0.0-next.27

## 1.0.0-next.26

### Patch Changes

- Updated dependencies [[`201a7993`](https://github.com/udecode/slate-plugins/commit/201a799342ff88405e120182d8554e70b726beea)]:
  - @udecode/slate-plugins-core@1.0.0-next.26
  - @udecode/slate-plugins-common@1.0.0-next.26
  - @udecode/slate-plugins-block-quote@1.0.0-next.26
  - @udecode/slate-plugins-code-block@1.0.0-next.26
  - @udecode/slate-plugins-heading@1.0.0-next.26
  - @udecode/slate-plugins-link@1.0.0-next.26
  - @udecode/slate-plugins-list@1.0.0-next.26
  - @udecode/slate-plugins-paragraph@1.0.0-next.26
