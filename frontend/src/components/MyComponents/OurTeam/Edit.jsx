import React from 'react';
import OurTeamView from './View'
import OurTeamBlockData from './Data'
import { SidebarPortal } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';

const OurTeamEdit = (props) => {
  const { selected } = props;
  return (
    <>
      <OurTeamView {...props} isEditMode={true} />
      <SidebarPortal selected={selected}>
        <OurTeamBlockData
          {...props}
        />
      </SidebarPortal>
    </>
  )
}

export default withBlockExtensions(OurTeamEdit);