import React from 'react'
import { Route } from 'react-router-dom'

import ArticleList from './containers/ArticleListView'
import ArticleDeatil from './containers/ArticleDetailView'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ArticleList}/>
        <Route exact path='/:articleID' component={ArticleDeatil}/>

    </div>
)

export default BaseRouter