import { connect } from 'react-redux'
import { getMachine } from '../selectors/machine'

export default connect(
  (state) => ({
    machine: getMachine(state)
  })
)
