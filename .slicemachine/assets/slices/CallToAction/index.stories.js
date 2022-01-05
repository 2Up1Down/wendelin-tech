import MyComponent from '../../../../slices/CallToAction';

export default {
  title: 'slices/CallToAction'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Matrix cross-media e-services","spans":[]}],"description":[{"type":"paragraph","text":"Laborum amet enim occaecat aliquip est eu amet velit do dolor officia.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"},"buttonLabel":"integrate rich models","iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1547082299-de196ea013d6?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithBackgroundImage = () => <MyComponent slice={{"variation":"withBackgroundImage","name":"with Background Image","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Extend cutting-edge web services","spans":[]}],"description":[{"type":"paragraph","text":"Laborum ullamco eiusmod aliqua do ad velit elit eiusmod minim sunt aliqua proident do deserunt. In eiusmod magna irure. In nisi fugiat occaecat est ea eiusmod.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://twitter.com"},"buttonLabel":"aggregate end-to-end platforms","iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=900&h=500&fit=crop"},"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1571126770897-2d612d1f7b89?w=900&h=500&fit=crop"}},"id":"_WithBackgroundImage"}} />
_WithBackgroundImage.storyName = 'with Background Image'
