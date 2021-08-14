import React from 'react';
import './style.css';
//could do the icons separated as components
export default () => { 
    return (
        <section className="projects">
          <form>
            <p className="game"><strong>Two Truths and one lie</strong></p>
            <input type="button" value="Reveal the lie" className="button" /> 
            <input type="radio" id="totallyT" name="truesandlie" value="totallyT"/>
            <label htmlFor="totallyT">I'm an Electrician</label>
            <input type="radio" id="notF" name="truesandlie" value="notF" />
            <label htmlFor="notF">I have been obsessed with edible mold</label>
            <input type="radio" id="maybeT" name="truesandlie" value="maybeT"/>
            <label htmlFor="maybeT" id="maybeTText">I lack a toe nail</label>
          </form>
        </section>
    );
}