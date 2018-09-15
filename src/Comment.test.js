import React from 'react'
import { render } from 'enzyme'

import Comment from './Comment'

it('should render', () => {

    const c = {
        comment: 'teste'
    }

    const wrapper = render(<Comment cmt={c} />)

    expect(wrapper.text()).toBe('Comentário: teste')

    //console.log(wrapper.text())

})

