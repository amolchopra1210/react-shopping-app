import React, { Component } from 'react'
import Menu from '../menu-item/menu-item.component';
import './directory.styles.scss';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {selectDirectorySection} from '../../redux/directory/directory.selectors';
const Directory = ({section}) =>(     
    <div className = "directory-menu">
        {
            section.map(({id,...sectionProps}) =>(
                <Menu key = {id} {...sectionProps}/>
            ))
        };
    </div>    
) 

const mapStateToProps = createStructuredSelector({
    section: selectDirectorySection
})
export default connect(mapStateToProps)(Directory);