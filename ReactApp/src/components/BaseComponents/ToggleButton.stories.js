import  ToggleButton  from './ToggleButton';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
 
  component: ToggleButton,
  parameters: {
   
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
  args: {
    pv:'testIOC:BO1',
    label:'testIOC:BO1 ',    
  },
};

export const Momentary = {
  args: {
    pv:'testIOC:BO1',
    label:'testIOC:BO1 ',
    momentary:true,    
  },
};
