import { Collapse } from 'antd'
import Question from './Question'
import Answer from './Answer'
import data from '../data'

const CollapseComp = () => {
  const { Panel } = Collapse

  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="bg-white/30 border-2 border-white text-2xl my-5 rounded-lg py-5" key={index}>
            <Collapse bordered={false} ghost={true}>
              <Panel
                showArrow={false}
                header={<Question question={item.question} />}
              >
                <Answer answer={item.answer} />
              </Panel>
            </Collapse>
          </div>
        )
      })}
    </>
  )
}

export default CollapseComp
