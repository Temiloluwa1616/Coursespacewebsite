
function Sub(){
    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
        <div style={{backgroundColor:'#ffaf35' , padding: '70px', paddingLeft:'100px', paddingRight:'100px', borderRadius: '40px'}}>
          <h1>Subscribe to Our Newsletter</h1>
          <p>Subscribe to our newsletter to get information about our courses.</p><br />
          <form style={{display: 'flex', alignItems: 'center'}}>
            <input type="text" placeholder="Enter your email" style={{borderRadius: '5px', width: '400px', height:'30px', marginRight: '10px', border:'none'}}/>
            <button style={{borderRadius: '8px', backgroundColor: 'green', color: 'white', width: '100px', height:'35px', border:'none'}}>Subscribe</button>
          </form>
        </div>
      </div>
      

      
    )
}

export default Sub