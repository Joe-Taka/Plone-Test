import ButtonView from './View';
import ButtonEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const buttonConfig = {
  id: 'myCustomButton',
  title: 'My Custom Button',
  edit: ButtonEdit,
  view: ButtonView,
  icon: icon,
  group: 'common',
  restricted: false,
  mostUsed: true,
  sidebarTab: 1,
  security: {
    addPermission: [],
    view: [],
  },
};

export default buttonConfig;