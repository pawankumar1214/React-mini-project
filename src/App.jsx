import React from 'react'
import {Bookmark} from 'lucide-react'
const App = () => {
  return (
    <div className='parent'>

      <div className="card">
        <div className="top">
          <img src="https://imgs.search.brave.com/WRpUBHXeSPUB8YQ2RXenTxj1AaB-DFsG9IPfDDWTUj0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/aWNvbnM4LmNvbS9l/eHRlcm5hbC10aG9z/ZS1pY29ucy1mbGF0/LXRob3NlLWljb25z/LzEyMDAvZXh0ZXJu/YWwtQW1hem9uLUxv/Z28tc29jaWFsLW1l/ZGlhLXRob3NlLWlj/b25zLWZsYXQtdGhv/c2UtaWNvbnMuanBn" alt="" />
          <button>Save<Bookmark /></button>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </div>
  )
}

export default App
