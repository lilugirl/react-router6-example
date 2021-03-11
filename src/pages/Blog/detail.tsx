import {useParams,Link} from 'react-router-dom';
const BlogDetail=()=>{
    const {id}=useParams();

    return <div>
    博客详情  <span><Link to="/blog">回到列表</Link></span>
    <h1>id: {id}</h1>
    </div>
};
export default BlogDetail;