import React from 'react';
import OurTeamView from './View'
import OurTeamBlockData from './Data'
import { Segment, Form } from 'semantic-ui-react'
import { SidebarPortal, Field } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';

const OurTeamEdit = (props) => {
  const { selected, onChangeBlock, block, data } = props;
  console.log('props edit', props)
  return (
    <>
      <OurTeamView {...props} isEditMode={true} />
      <SidebarPortal selected={selected}>
        <h3>This is a SidebarPortal</h3>
        <Segment.Group raised>
          <header>
            <h3>Insira perfis</h3>
          </header>
          <Form>
            <Field
              id="files"
              widget="object_browser"
              title="Data file"
              value={data.files || []}
              onChange={(id, value) => {
                console.log('id', id, 'value', value)
                onChangeBlock(block, {
                  ...data,
                  [id]: value,
                });
              }}
            />
          </Form>
        </Segment.Group>
      </SidebarPortal>
    </>
  )
}

export default withBlockExtensions(OurTeamEdit);