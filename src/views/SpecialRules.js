import React, { useContext } from 'react'
import { AppContext } from '../AppContext'
import Button from '../components/Button'
import CheckBox from '../components/CheckBox'
import Input from '../components/Input'
import SectionHeading from '../components/SectionHeading'

const SpecialRules = () => {

  const { 
    specialRulesOpen, 
    handleSpecialRulesOpenClick,
    criticalHitsOn,
    handleEraseDefaultCriticalHitsOn,
    handleCriticalHitsOnChange,
    criticalWoundsOn,
    handleEraseDefaultCriticalWoundsOn,
    handleCriticalWoundsOnChange,
    anti,
    handleAntiChange,
    feelNoPain,
    handleFeelNoPainChange,
    sustainedHits,
    handleSustainedHitsChange,
    devastatingWounds, 
    handleDevastatingWoundsClick, 
    lance, 
    handleLanceClick, 
    torrent, 
    handleTorrentClick,
    twinLinked, 
    handleTwinLinkedClick 
  } = useContext(AppContext)

  return (
    <div className={specialRulesOpen ? 'page spec spec--open' : 'page spec'}>
      <section className='secondary-control-bar'>
        <Button 
          className='btn btn--small btn--blue'
          label='«'
          onClick={handleSpecialRulesOpenClick}
        />
      </section>
      
      <div className='special-issue-padding'>
        <SectionHeading
          headingText='Special rules'
        />
        <section className='section-container'>
          <Input
            id='criticalHitsOn'
            inputContainer='input-container'
            inputLayout='label-beside'
            inputStyle='input-small'
            label='crit. hits on'
            labelStyle='input-label'
            onChange={handleCriticalHitsOnChange}
            onClick={handleEraseDefaultCriticalHitsOn}
            type='number'
            value={criticalHitsOn}
          />

          <Input
            id='criticalWoundsOn'
            inputContainer='input-container'
            inputLayout='label-beside'
            inputStyle='input-small'
            label='crit. wounds on'
            labelStyle='input-label'
            onChange={handleCriticalWoundsOnChange}
            onClick={handleEraseDefaultCriticalWoundsOn}
            type='number'
            value={criticalWoundsOn}
          />

          <Input
            id='anti'
            inputContainer='input-container'
            inputLayout='label-beside'
            inputStyle='input-small'
            label='anti'
            labelStyle='input-label'
            onChange={handleAntiChange}
            placeholder='-'
            type='number'
            value={anti}
          />

          <Input
            id='feelNoPain'
            inputContainer='input-container'
            inputLayout='label-beside'
            inputStyle='input-small'
            label='feel no pain'
            labelStyle='input-label'
            onChange={handleFeelNoPainChange}
            placeholder='-'
            type='number'
            value={feelNoPain}
          />

          <Input
            id='sustainedHits'
            inputContainer='input-container'
            inputLayout='label-beside'
            inputStyle='input-small'
            label='sustained hits'
            labelStyle='input-label'
            onChange={handleSustainedHitsChange}
            placeholder='-'
            type='number'
            value={sustainedHits}
          />

          <CheckBox
            action={handleDevastatingWoundsClick}
            id={devastatingWounds}
            inputContainer='input-container'
            inputLayout='label-beside'
            label='devast. wounds'
            labelStyle='input-label'
          />

          <CheckBox
            action={handleLanceClick}
            id={lance}
            inputContainer='input-container'
            inputLayout='label-beside'
            label='lance'
            labelStyle='input-label'
          />

          <CheckBox
            action={handleTorrentClick}
            id={torrent}
            inputContainer='input-container'
            inputLayout='label-beside'
            label='torrent'
            labelStyle='input-label'
          />

          <CheckBox
            action={handleTwinLinkedClick}
            id={twinLinked}
            inputContainer='input-container'
            inputLayout='label-beside'
            label='twin-linked'
            labelStyle='input-label'
          />
        </section>
      </div>


    </div>
  )
}

export default SpecialRules