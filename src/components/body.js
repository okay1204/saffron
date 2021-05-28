import AddCircle from '../images/addCircle.png';

function Body({recipes, setRecipes, ipcRenderer}) {

    return (
        <div className='MainBody body'>
            {
                recipes && recipes.length > 0 && 
                <div className='center'>
                        <h2>Looks like you don't have any recipes!</h2>
                        <div className='center-image-in-text'>
                            <h3>Click the </h3><img src={AddCircle} alt='Add recipe icon' className='inline-add-circle-icon'/><h3> icon on the top right to add your first recipe.</h3>
                        </div>    
                </div>
            }

            <span style={{color: 'white'}}>{String(recipes)}</span>

            <button onClick={() => {
                ipcRenderer.recipes.add({id: 1, name: 'Some good pasta'})
            }}>add</button>
            <button onClick={() => {
                ipcRenderer.recipes.remove('d9690108-d917-4e29-a4bf-0f000de9d453')
            }}>remove</button>
            <button onClick={() => {
                ipcRenderer.recipes.clear()
            }}>clear</button>
        </div>
    )
};

export default Body;