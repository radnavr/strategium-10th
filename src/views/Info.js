import React, {useContext} from 'react'
import {AppContext} from '../AppContext'
import Button from '../components/Button'
import SectionHeading from '../components/SectionHeading'


const Info = () => {

  const { infoOpen, handleInfoOpenClick } = useContext(AppContext)

  return (
    <div className={infoOpen ? 'page info info--open' : 'page info'}>
      <section className='secondary-control-bar'>
          <Button 
            className='btn btn--small btn--blue'
            label='«'
            onClick={handleInfoOpenClick}
          />
      </section>

      <div className='special-issue-padding'>
        <SectionHeading
          headingText='Instructions'
        />
        <section className='section-container'>
          <p className='text text--centered u-margin'>Strategium is a Warhammer 40k 10th edition calculator. The app is able to compute an average expected result of any given attack.</p>

          <p className='text text--centered u-margin'>The app offers basic attack mechanics, all relevant special rules simulations, and setting of both critical hits and critical wounds.</p>

          <p className='text text--centered u-margin'>Most input fields accept only integers ranging from 2 to 6. If an input field is pre-filled with a number, the number can be changed. If it is pre-filled with a dash, re-writing it with a proper number activates the corresponding rule.</p>

          <p className='text text--centered u-margin'>Inputs devast. wounds, lance, torrent and twin-linked are checkboxes, Checking of torrent can substitute filling of hits on field.</p>

          <p className='text text--centered u-margin'>Fields attacks and damage accept both integers and specially formatted strings of characters. These strings represent variable values produced by dice rolling and they are supposed to be written as follows – number of dice rolls (optional), space (in the case of multiple dice rolls), official dice roll abbreviation (mandatory) and fixed bonus(optional). Accepted string values variants should look like d3, 2D6, 2d6+6, 5&nbsp;D6 or 4&nbsp;2d6+3.</p>
        </section>
      </div>
    </div>
  )
}

export default Info