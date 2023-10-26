import React,{useState,useMemo, useEffect} from 'react';

const user = [
    {id: 1, name: '홍길동'},
    {id: 2, name: '김수혁'},
    {id: 3, name: 'cat'},
    {id: 4, name: 'DAUM'},
    {id: 5, name: '김수혁'},
    {id: 6, name: '마동석'},
    {id: 7, name: 'naver'},
    {id: 8, name: '김희선'},
    {id: 9, name: 'NAVER'},
    {id: 10, name: 'daum'},
]

const Test05 = () => {
    const [data,setData] = useState(user)
    const [text,setText] = useState('')
    const [search, setSearch] = useState('')
    //검색 버튼
    /*const onSearch = () => {
        //setData(user.filter(item => item.name.toLowerCase().includes(text.toLowerCase())))
        setData(user.filter(item=> item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1  ))
    }
    */
    //검색버튼 - useMemo() 사용
    useMemo(() =>{
        return setData(user.filter(item=> item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1  ))
    },[search]) // search 값이 변경될때마다 작동하는 함수

    const onSearch = () => {
        setSearch(text)
    }
    //검색 버튼을 누르지 않고 글자가 바뀌면 바로 바로 결과가 나온다.
    useEffect(()=>{
        setData(user.filter(item=> item.name.toLowerCase().indexOf(text.toLowerCase()) !== -1  ))
    },[text])

    return (
        <div>
            <input type='text' value={ text } onChange={e => {setText(e.target.value)}} />
            <button onClick={ onSearch }>검색</button>
            <ul>
                {
                    data.map(item => <li key={ item.id }>
                        { item.id } / { item.name }
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Test05;