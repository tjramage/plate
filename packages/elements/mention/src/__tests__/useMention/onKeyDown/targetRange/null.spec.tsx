/** @jsx jsx */
import { act, renderHook } from '@testing-library/react-hooks';
import { SPEditor } from '@udecode/plate-core';
import { jsx } from '@udecode/plate-test-utils';
import { useMentionPlugin } from '../../../../useMentionPlugin';

jsx;

const input = ((
  <editor>
    <hp>test</hp>
  </editor>
) as any) as SPEditor;

it('should be', () => {
  const { result } = renderHook(() => useMentionPlugin());

  act(() => {
    result.current.plugin.onKeyDown?.(input)(
      new KeyboardEvent('ArrowDown') as any
    );
  });

  expect(result.current.getMentionSelectProps().valueIndex).toBe(0);
});
