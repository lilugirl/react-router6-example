import {Link} from 'react-router-dom';
const BlogList=()=><div>博客列表
    <ul>
        <li>
            <Link to="/blog/1" >文章1</Link>
        </li>
        <li>
            <Link to="/blog/2" >文章2</Link>
        </li>
        <li>
            <Link to="/blog/3" >文章3</Link>
        </li>
        <li>
            <Link to="/blog/4" >文章4</Link>
        </li>
    </ul>
</div>;
export default BlogList;