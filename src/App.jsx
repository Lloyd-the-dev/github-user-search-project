import './App.css'
import { useState } from 'react';


function App() {
 

const [darkmode, setDarkmode] = useState(false);

const [searchItem, setSearchItem] = useState("");

//States to store the github user's information
const[name, setName] = useState("Octo")
const[username, setUsername] = useState("octocat")
const[dateJoined, setDateJoined] = useState("25 Jan 2011")
const[avatar, setAvatar] = useState("/images/cat.jpg")
const[bio, setBio] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit odio in voluptas architecto dicta accusantium!")
const[repos, setRepos] = useState(8)
const[followers, setFollowers] = useState(3938)
const[following, setFollowing] = useState(9)
const[location, setLocation] = useState("San Francisco")
const[twitter, setTwitter] = useState(null)
const[github, setGithub] = useState("https://github.com")
const[company, setCompany] = useState("Enormico")

function handleClick(value){
  fetch(`https://api.github.com/users/${value}`)
    .then(res => res.json())
    .then(data => {
      setName(data.name)
      setUsername(data.login)
      let timeStamp = data.created_at

      let date = new Date(timeStamp)

      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      let day = date.getUTCDate()
      let month = months[date.getUTCMonth()]
      let year = date.getUTCFullYear()
      setDateJoined(day +" "+ month + " " + year)
      setAvatar(data.avatar_url)
      setBio(data.bio)
      setRepos(data.public_repos)
      setFollowers(data.followers)
      setFollowing(data.following)
      setLocation(data.location)
      setTwitter(data.twitter_username)
      setGithub(data.html_url)
      setCompany(data.company)
    })
  

}

  return (
    <>

      <div className={`h-full w-full p-16 bg-${darkmode ? "thick" : "back"}`}>
          <div className={`font-mono sm:w-3/5 sm:m-24 sm:ml-64`}>
            <div className={`flex flex-row justify-between text-${darkmode ? "back" : "black"} transition-all mb-8`}>
                <p>devfinder</p>
                <button className='flex justify-between' onClick={() => setDarkmode(!darkmode)}>
                  <p>{darkmode ? "Light" : "Dark"}</p>
                  <img src={`/images/${darkmode ? "sun" : "moon"}.png`} alt="" className='ml-4' />
                </button>
            </div>

            {/* Search section */}
            <div className={`bg-${darkmode ? "darkoo" : "back"} transition-all flex justify-between items-center p-2 rounded-md shadow-md`}>
                <div className='flex items-center justify-between ml-8'>
                  <img src="/images/search.png" alt="" />
                  <input type="text" 
                  onChange={(event) => {
                      let item = event.target.value
                      setSearchItem(item.toLowerCase())
                  }}  
                  className={`transition-all sm:w-96 h-8 ml-8 bg-darkoo text-${darkmode ? "back" : "black"}`}/>
      
                </div>
                <button className='p-2 rounded-md text-back w-24 bg-sky-500' onClick={
                  () =>{
                    handleClick(searchItem)
                  }
                }>Search</button>
            </div>

            {/* second container */}
      
              <div className={`mt-8 w-5/5 rounded-md p-4 sm:p-8 bg-${darkmode ? "darkoo" : "back"}  text-${darkmode ? "back" : "black"} transition-all`}> 
              <div className='flex justify-between'>
                      <img src={avatar} alt="" className='sm:w-36 sm:h-36 rounded-full object-cover w-28 h-28'/>
          
                          <div className='flex sm:flex-row sm:justify-between justify-around flex-col  mt-4 sm:w-3/4 w-3/5'>
                                  <div>
                                      <h3>{name}</h3>
                                      <p className='text-link'>@{username}</p>
                                  </div>
                                  <p>Joined {dateJoined}</p>
                          </div>
              </div>
                          <div className='sm:w-5/5 sm:ml-44' id='lorem'>
                              <p className='sm:mt-4 mt-8'>{bio}</p>
                              <div className={`flex justify-between mt-4 p-5 rounded-md bg-${darkmode ? "thick" : "ash"}  `}>
                                <div>
                                    <p>Repos</p>
                                    <p className='font-black text-lg'>{repos}</p>
                                </div>
                                <div>
                                    <p>Followers</p>
                                    <p className='font-black text-lg'>{followers}</p>
                                </div>
                                <div>
                                    <p>Following</p>
                                    <p className='font-black text-lg'>{following}</p>
                                </div>
                              </div>
                              <div className='mt-8 flex flex-col sm:flex-row justify-between'>
                                <div className='flex flex-col justify-between h-1/2 mb-4'>
                                  <div className='flex justify-between w-36 items-center'>
                                      <img src="/images/location.png" alt="" className='h-5'/>
                                      <p>{location}</p>
                                  </div>
                                  <div className='flex w-54 items-center mt-2'>
                                      <img src="/images/link.png" alt="" className='h-5'/>
                                      <p className='w-4/5 ml-2'>{github}</p>
                                  </div>
                                </div>
                                <div>
                                <div className='flex justify-between w-36 items-center'>
                                      <img src="/images/twitter.png" alt="" className='h-5'/>
                                      <p>{(twitter) ? twitter : "Not available" }</p>
                                  </div>
                                  <div className='flex w-48 items-center mt-2'>
                                      <img src="/images/office.png" alt="" className='h-5'/>
                                      <p className='ml-4'>{(company) ? company : "Not available"}</p>
                                  </div>
                                </div>
  
                          </div>
                    </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
