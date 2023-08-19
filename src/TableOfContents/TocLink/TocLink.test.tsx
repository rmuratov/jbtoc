import { render } from '@testing-library/react';
import React from 'react';

import { TocLink } from './TocLink';

const pageMock = {
  id: 'a09e2407',
  level: 0,
  pages: [
    'Get_started_with_Kotlin',
    'Kotlin_REPL',
    'Debug_Kotlin_coroutines',
    'Ktor',
    'Create_your_first_Kotlin_app',
    'Debug_your_first_Kotlin_application',
    'tdd-with-kotlin',
    'Tutorial__Structural_search_and_replace_in_Kotlin',
    'Run_Debug_Configuration_Kotlin',
    'Run_Debug_Configuration_Kotlin_Script',
  ],
  parentId: 'ij',
  tabIndex: 13,
  title: 'Kotlin',
};

test('renders', () => {
  const { container } = render(<TocLink page={pageMock} />);
  expect(container.childNodes.length).not.toEqual(0);
});
