import React, { useMemo }  from 'react';

const getColor = (color) => {
    console.log('getColor')

    switch(color){
        case 'hotpink' :
            return '게이(를)'
        case 'magenta' :
            return '보라돌이'
        case 'skyblue' :
            return '하늘색'
        case 'tomato' :
            return '토메이토'
    }
}  
const getFood = (food) => {
    console.log('getFood')

    switch(food){
        case '햄버거' :
            return '쓰레기 같은 음식 JUNK FOOD'
        case '삼겹살' :
            return '돼지가 죽는 것'
        case '치킨' :
            return '닭이 죽는 것'
        case '짜장면' :
            return '중국인?'
    }
}  //둘중 하나만 처리하려면 useEffect 쓰거나 if문 써야된다.
const Test04Sub = ({ color, food }) => {
    //실행하자마자 또는 color의 값을 바꾸거나 , food의 값을 바꾸거나 로그가 모두 찍힌다.
    //const colorInfo = getColor(color)
    //const foodInfo = getFood(food)

    //해결방법
    //일반함수가 아니라 useMemo()를 사용하면
    //color를 선택하면 getColor만 찍히고 , food 를 선택하면 getFood만 로그가 찍히도록 한다.
    const colorInfo = useMemo(()=>{
        return getColor(color)
    },[color]) //칼라의 값이 바뀔때 마다 처리해라

    const foodInfo = useMemo(()=> {
        return getFood(food)
    },[food])

    return (
        <div>
            <h3>선택한 색 : { color }</h3>
            <h4>당신은 { colorInfo }을 좋아하시는군요!!</h4>
            
            <h3>선택한 음식 : { food }</h3>
            <h4>당신은 { foodInfo }을 좋아하시는군요!!</h4>
        </div>
    );
};

export default Test04Sub;