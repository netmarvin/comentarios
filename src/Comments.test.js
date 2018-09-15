import React from 'react'
import { shallow } from 'enzyme'
import Comments from './Comments'
import Comment from './Comment'

describe('<Comments />', () => {

    it('should render Comments', () => {

        const comments = [
            { id: '1', comment: 'Comment 01'},
            { id: '2', comment: 'Comment 02'}
        ]

        const wraper = shallow(<Comments comments={comments} />)

        //console.log(wraper.find(Comment).length)

        console.log(wraper.html())

        expect(wraper.find(Comment).length).toBe(2)

        expect(wraper.find(Comment).get(0).props.cmt).toBe(comments[0])

        expect(wraper.find(Comment).get(1).props.cmt).toBe(comments[1])

    })

    it('should work with no Comments', () => {

        const comments = []

        const wraper = shallow(<Comments comments={comments} />)

        console.log(wraper.html())

        expect(wraper.find(Comment).length).toBe(0)

    })

})