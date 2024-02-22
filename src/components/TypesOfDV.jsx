import {Bgfortypeofdv,es1, es2, es3, es4, es5,es6, es7, es8, es9} from '../assets/';

function TypesOfDV() {

  return (
    <>
      <div>
        <img className='w-full'src={Bgfortypeofdv}/>
      </div>
      <div className='flex flex-col font-montserrat gap-10 p-10 bg-[#E5FBEC] text-lg lg:px-24'>
        <div className='flex flex-col gap-5'>
          <h4 className="lg:text-4xl text-3xl font-bold underline underline-offset-8  decoration-green-600" >Types of Domestic Violence</h4>
          <p>Domestic violence encompasses various forms of abusive behaviors that occur within intimate relationships or households. It’s important to note that domestic violence can affect anyone, regardless of age, gender, race, or socioeconomic status. The types of domestic violence include:</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  '>
          <div className='flex flex-col gap-5'>
            <img src={es1}/>
            <h4 className='font-semibold text-lg' >Physical Abuse</h4>
            <p>Involves the use of force that causes bodily harm or injury, such as hitting, slapping, punching, kicking, or any other form of physical assault.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es2}/>
            <h4 className='font-semibold text-lg' >Emotional or Psychological Abuse:</h4>
            <p>Includes behaviors that aim to control, manipulate, or intimidate the victim emotionally. This may involve verbal abuse, humiliation, threats, and isolation.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es3}/>
            <h4 className='font-semibold text-lg' >Sexual Abuse</h4>
            <p>Involves any non-consensual sexual activity or coercive tactics to force someone into unwanted sexual acts. This includes rape, sexual assault, and other forms of sexual coercion.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es4}/>
            <h4 className='font-semibold text-lg' >Financial Abuse</h4>
            <p>Occurs when one partner controls the other’s financial resources, limiting their access to money or preventing them from making independent financial decisions. This can contribute to dependency and restrict the victim’s ability to leave an abusive relationship.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es5}/>
            <h4 className='font-semibold text-lg' >Digital or Technological Abuse</h4>
            <p>Involves the use of technology to control, monitor, or harass a partner. This can include cyberstalking, monitoring online activities, or using technology to spread false information about the victim.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es6}/>
            <h4 className='font-semibold text-lg' >Stalking</h4>
            <p>Involves repeated and unwanted attention, harassment, contact, or any other behavior that causes fear or distress. Stalking can occur in person or through various forms of communication, including online stalking.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es7}/>
            <h4 className='font-semibold text-lg' >Cultural or Identity-based Abuse</h4>
            <p>Targets a person’s cultural background, ethnicity, race, religion, sexual orientation, gender identity, or any other aspect of their identity. Abusers may use derogatory language, engage in discriminatory behavior, or exploit cultural beliefs to control and manipulate the victim.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es8}/>
            <h4 className='font-semibold text-lg' >Spiritual Abuse</h4>
            <p>Involves using religious or spiritual beliefs to control and manipulate a partner. This may include using religious doctrines to justify abusive behavior or preventing the victim from practicing their faith.</p>
          </div>
          <div className='flex flex-col gap-5'>
            <img src={es9}/>
            <h4 className='font-semibold text-lg' >Isolation</h4>
            <p>Involves controlling a person’s social interactions, isolating them from friends, family, or support networks. Isolation can make it more difficult for the victim to seek help or leave the abusive relationship.</p>
          </div>
        </div>
        <p>It’s important to recognize that these forms of domestic violence often coexist and may escalate over time. Domestic violence is a complex and pervasive issue, and addressing it requires a comprehensive understanding of the different types and their underlying dynamics. If you or someone you know is experiencing domestic violence, seeking help from local support services or law enforcement is crucial.</p>
      </div>

    </>
  )
}

export default TypesOfDV


