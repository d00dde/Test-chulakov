import React from 'react';

export default ({user : { id, name, age }}) => {
	return <div key={id}>{name} age: {age}</div>
}
