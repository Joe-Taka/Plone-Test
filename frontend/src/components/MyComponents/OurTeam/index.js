import OurTeamView from './View';
import OurTeamEdit from './Edit';
import icon from '@plone/volto/icons/list-bullet.svg';

const ourTeamConfig = {
  id: 'ourTeam',
  title: 'Our team',
  edit: OurTeamEdit,
  view: OurTeamView,
  icon: icon,
  group: 'common',
  restricted: false,
  mostUsed: true,
  sidebarTab: 1,
};

export default ourTeamConfig;