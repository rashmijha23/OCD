import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './Testimonial.css'

function GroupExample() {
  return (
    <>
    <div className="head">
    <h1>Testimonial</h1>
    </div>
    <br />
   

<div className="mycard">
<div class="row row-cols-1 row-cols-md-4 g-4 p-2">
  <div class="col">
    <div class="card">
      <div className="myimg">
      <Card.Img className='doci' src="test1.jpg" class="card-img-top" alt="..."/>
      </div>
      <div class="card-body">
        <h5 class="card-title">Nathan Santibanez</h5>
        <p class="card-text"> I believe in a holistic approach to each individual with medical or mental health issues, including patients with ADHD symptoms.have worked with all ages in assessing. </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     <div className="myimg">
     <Card.Img className='doci' src="docf.jpg" class="card-img-top" alt="..."/>
     </div>
      <div class="card-body">
        <h5 class="card-title">Maria Lourdes</h5>
        <p class="card-text">I have worked with all ages in assessing, diagnosing, and treating ADHD. I have also worked with clients who have depression, anxiety, bipolar disorder, and schizophrenia.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
   <div className="myimg">
   <Card.Img className='doci' src="test2.jpg" class="card-img-top" alt="..."/>
   </div>
      <div class="card-body">
        <h5 class="card-title">Mark Bender</h5>
        <p class="card-text"> I am currently board certified and state licensed. I am dedicated to providing excellent care to my patients and pride myself in listening to each patient's needs.they </p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
     <div className="myimg">
     <Card.Img className='doci' src="test3.jpg" class="card-img-top" alt="..."/>
     </div>
      <div class="card-body">
        <h5 class="card-title">Ernest J. Emery</h5>
        <p class="card-text">I am committed to the whole person concept and improving the quality of life of patients with complex medical conditions and their family members</p>
      </div>
    </div>
  </div>
</div>
</div>
    </>
  );
}

export default GroupExample;