import React, { useState } from 'react';
import Test04Sub from './Test04Sub';

const Test04 = () => {
    const [color,setColor] = useState('') // 비어있더라도 초기값을 줘야한다. 안주면 오류남.
    const [food, setFood] = useState('')

    const onColor = (e) => {
        setColor(e.target.value)
    }
    const onFood = (e) => {
        setFood(e.target.value)
    }

    return (
        <div style={{margin: 30}}>
            <h2> 당신이 좋아하는 색은?</h2>
            <div>
                {/* <input type='text' value={ color } onChange={ e => setColor(e.target.value) } />
                <p>선택 : hotpink , magenta, skyblue, tomato</p> 이렇게 써도되고! */}
                <select onChange={onColor} size='5' style={{width:'120px'}}>
                    <option value='hotpink'>hotpink</option>
                    <option value='magenta'>magenta</option>
                    <option value='skyblue'>skyblue</option>
                    <option value='tomato'>tomato</option>
                </select>
            </div>
            <hr/>
            <h2> 당신이 좋아하는 음식은? </h2>
            <div>
                <p>
                    <input type='radio' name='food' value='햄버거' onChange={onFood}/>
                    <label>햄버거</label>
                </p>
                <p>
                    <input type='radio' name='food' value='삼겹살' onChange={onFood}/>
                    <label>삼겹살</label>
                </p>
                <p>
                    <input type='radio' name='food' value='치킨' onChange={onFood}/>
                    <label>치킨</label>
                </p>
                <p>
                    <input type='radio' name='food' value='짜장면' onChange={onFood}/>
                    <label>짜장면</label>
                </p>
                <hr/>
                <Test04Sub color={color} food={food} />
            </div>
        </div>
    );
};

export default Test04;