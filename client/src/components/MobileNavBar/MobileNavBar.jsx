import React from 'react'
import {MobNavDiv, BurgerIconMob, IconImg, NavA} from './StyledMobileNavBar'
import BurgerMenuImg from "../../assets/img/burgerMenu.png";
import { connect } from 'react-redux'

const mapState=state=>({
    showLogo: state.genreBTNClicked.data
}); 

function MobileNavBar({showLogo}) {
  return (
    <MobNavDiv>
        {!showLogo ?
        (
            null
        ):(
        <NavA><span style={{color:'#C64747'}}>X</span>MOVIE</NavA> 

        )}
      <BurgerIconMob>
          <IconImg src={BurgerMenuImg} />
        </BurgerIconMob>
    </MobNavDiv>
  )
}

export default connect(mapState)(MobileNavBar)
