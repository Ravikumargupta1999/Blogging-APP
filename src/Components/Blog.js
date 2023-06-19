export default function Blog(){

    function handleSubmit(e){
        e.preventDefault();
    }

    return(
        <>
        <h1>Blogging APP</h1>
        <div className="section">
            <form onSubmit={handleSubmit}>
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."/>
                </Row >
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                        />
                </Row >


                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        <h2> Blogs </h2>
        
        </>
        )
    }

function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
