
import Sidenavbar from '../common/Sidenavbar/Sidenavbar';
import { ProSidebarProvider } from 'react-pro-sidebar';


const meta= {
  title: 'Sidenavbar',
  component: Sidenavbar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <ProSidebarProvider>
        <Story />
      </ProSidebarProvider>
    ),
  ]
};

export default meta;


export const LoggedOut= {};
