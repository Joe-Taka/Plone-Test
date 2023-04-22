import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu, Table, Modal } from 'semantic-ui-react';
import getPageContent from '../../../services/searchContent'

const OurTeamView = (props) => {

  console.log('props view', props)

  //const data = getPageContent('/servidores/joe')

  //console.log('data view', data)

  return (
    <div className="border-roxo border-solid border-2 p-4">
      Our Team
    </div>
  )
}

export default OurTeamView;