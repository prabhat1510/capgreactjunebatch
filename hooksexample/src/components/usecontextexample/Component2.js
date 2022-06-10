import Component3 from './Component3';
function Component2({user}){

    return (
        <>
            <h1> Component 2</h1>
            <Component3 user={user} />
        </>
    );
}

export default Component2;