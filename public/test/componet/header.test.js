import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import Header from '../../components/Dashboardpage'

test('testing header componets',()=>{
    const renderer=new ReactShallowRenderer()
    renderer.render(<Header/>)
    console.log(renderer.getRenderOutput())
})
 