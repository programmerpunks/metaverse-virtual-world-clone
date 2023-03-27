import Flash from './Flash'
import Left from './Left'
import Right from './Right'

const LandingSection = () => {
  return (
    <div className="bg-gradient-to-l from-gray-700 via-gray-900 to-black">
      <div className="flex justify-center">
        <div className="max-w-complete flex w-full items-center gap-5">
          <div className="flex-1">
            <Left />
          </div>
          <div className="flex-1 py-10">
            <Right />
          </div>
        </div>
      </div>
      <Flash />
    </div>
  )
}

export default LandingSection
