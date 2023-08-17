import PropTypes from 'prop-types'
import { ButtonTitle } from './ButtonTitle'

const Button = ({ title, children }) => {
  return (
    <div className='mt-4'>
      <ButtonTitle title={title} />
      {children}
    </div>
  )
}

Button.propTypes = {
  children: PropTypes.any,
  title: PropTypes.string
}

export default Button
