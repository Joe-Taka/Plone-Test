import React from 'react';
import { BlockDataForm } from "@plone/volto/components";
import blockSchema from './schema';

const OurTeamBlockData = (props) => {
  const { data, block, onChangeBlock } = props;
  const schema = blockSchema({ ...props })
  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={(id, value) => {
        onChangeBlock(block, {
          ...data,
          [id]: value,
        });
      }}
      formData={data}
      block={block}
    />
  )
}

export default OurTeamBlockData;