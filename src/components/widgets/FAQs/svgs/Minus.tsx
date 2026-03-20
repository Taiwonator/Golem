interface MinusProps {
  color?: string
}

const Minus: React.FC<MinusProps> = ({ color }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="4" viewBox="0 0 22 4">
    <rect id="Rectangle_203" data-name="Rectangle 203" width="4" height="22" transform="translate(0 4) rotate(-90)" fill={color || '#ff6b00'}/>
  </svg>

)

export default Minus