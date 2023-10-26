import React, { useState ,useEffect} from 'react';
import axios from 'axios';

const Test02 = () => {
    const [id,setId] = useState('')
    const [dto,setDto] = useState({})
    const [search, setSearch] = useState(1)

    /*
    const onInput =(e)=>{
        setId(e.target.value)
    } o
    */ 
    const onSearch = (id) => {
        setSearch(id)
    }

    useEffect( () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //아이디의 값필요. /숫자 https://jsonplaceholder.typicode.com/posts/78 이런식으로 써줘야되나...
        .then(res=> setDto(res.data))
    //},[search]) //상태값을 변하게 할때 마다 useEffect를 실행해줘라는말임. - 버튼을 누를때마다
    //},[search,id])    - 버튼 누를때든, 아이디 변경할때든. 둘다 적용.
},[id]) // -id 값이 바뀔때 마다.
    return (
        <div>
            <input type='text' value={ id } onChange={ e => setId(e.target.value) }/> {/* onChange={ (e) => setId(e.target.value) } 이걸 저렇게 써도된다. */}
            <button onClick={ () => onSearch(id) }>검색</button>
            <hr/>
            <h3>{ dto.id } / {dto.title} </h3>
        </div>
    );
};

export default Test02;