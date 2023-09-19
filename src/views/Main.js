import React, {useContext} from 'react';
import { AppContext } from '../AppContext';
import Button from '../components/Button';
import Input from '../components/Input'
import Logo from '../components/Logo'
import SectionHeading from '../components/SectionHeading'

const Main = () => {

  const {
    handleInfoOpenClick, 
    handleSpecialRulesOpenClick,
    attacks,
    handleAttacksChange,
    hitsOn,
    handleHitsOnChange,
    woundsOn,
    handleWoundsOnChange,
    savesOn,
    handleSavesOnChange,
    damage,
    handleEraseDefaultDamage,
    handleDamageChange,
    attackResult,
    hadleAttackResultChange, 
    handleReset, 
    
    specialRulesOpen,
    infoOpen
  } = useContext(AppContext)

  return (
    <div className={
      specialRulesOpen || infoOpen 
      ? 'page page--sb--layout scroll-locked' 
      : 'page page--sb--layout'
    }>
      <section className='primary-control-bar'>
          <Button
            className='btn btn--small btn--blue'
            label='i'
            onClick={handleInfoOpenClick}
          />
        <Logo />       
          <Button
            className='btn btn--small btn--blue'
            label='+'
            onClick={handleSpecialRulesOpenClick}
          />
      </section>

      <div>
        <SectionHeading
          headingText='Cogitation'
        />
        <section className='section-container'>    
            <Input
              id='attacks'
              inputContainer='input-container'
              inputLayout='label-above'
              inputStyle='input-large red'
              label='attacks'
              labelStyle='input-label'
              onChange={handleAttacksChange}
              type='string'
              value={attacks}
            />

            <Input
              id='hitsOn'
              inputContainer='input-container'
              inputLayout='label-above'
              inputStyle='input-large'
              label='hits on'
              labelStyle='input-label'
              onChange={handleHitsOnChange}
              type='number'
              value={hitsOn}
            />

            <Input
              id='woundsOn'
              inputContainer='input-container'
              inputLayout='label-above'
              inputStyle='input-large'
              label='wounds on'
              labelStyle='input-label'
              onChange={handleWoundsOnChange}
              type='number'
              value={woundsOn}
            />

            <Input
              id='savesOn'
              inputContainer='input-container'
              inputLayout='label-above'
              inputStyle='input-large'
              label='saves on'
              labelStyle='input-label'
              onChange={handleSavesOnChange}
              type='number'
              value={savesOn}
            />

            <Input
              id='damage'
              inputContainer='input-container'
              inputLayout='label-above'
              inputStyle='input-large'
              label='damage'
              labelStyle='input-label'
              onChange={handleDamageChange}
              onClick={handleEraseDefaultDamage}
              type='string'
              value={damage}
            />

            <div className='space-between-container'>
              <Button
                className='btn btn--large btn--green' 
                label='Start' 
                onClick={hadleAttackResultChange}
              />
              <Button
                className='btn btn--large btn--red' 
                label='Reset'
                onClick={handleReset}
              />
            </div>
        </section>
      </div>

      <div>
        <SectionHeading
          headingText='Result'
        />
        <section className='section-container'>
          <p className='text text--centered u-margin'>
            {!attackResult && 'input required'}
            {(attackResult && Number(attackResult) * 1 == attackResult) && `${attackResult} W expected`}
            {(attackResult && Number(attackResult) * 1 != attackResult) && `${attackResult}`}
          </p>
        </section>
      </div>

    </div>

    
  )
}

export default Main