import MyComponent from '../../../../slices/CallToAction';

export default {
  title: 'slices/CallToAction'
}


export const _DefaultSlice = () => <MyComponent slice={{"variation":"default-slice","name":"Default slice","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Innovate end-to-end web-readiness","spans":[]}],"description":[{"type":"paragraph","text":"Anim consequat occaecat occaecat anim ea non mollit ex.","spans":[]}],"buttonLink":{"link_type":"Web","url":"http://google.com"},"buttonLabel":"aggregate distributed synergies","iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1589321599763-d66926c29613?w=900&h=500&fit=crop"}},"id":"_DefaultSlice"}} />
_DefaultSlice.storyName = 'Default slice'

export const _WithBackgroundImage = () => <MyComponent slice={{"variation":"withBackgroundImage","name":"with Background Image","slice_type":"call_to_action","items":[],"primary":{"title":[{"type":"heading1","text":"Harness killer initiatives","spans":[]}],"description":[{"type":"paragraph","text":"Officia nisi quis id cillum cillum.","spans":[]}],"buttonLink":{"link_type":"Web","url":"https://prismic.io"},"buttonLabel":"unleash interactive channels","iconImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1596195689404-24d8a8d1c6ea?w=900&h=500&fit=crop"},"backgroundImage":{"dimensions":{"width":900,"height":500},"alt":"Placeholder image","copyright":null,"url":"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&h=500&fit=crop"}},"id":"_WithBackgroundImage"}} />
_WithBackgroundImage.storyName = 'with Background Image'
