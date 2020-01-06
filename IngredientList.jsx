import Ingredient from './Ingredient';

const IngredientList = ({ list }) => {
	return (
		<ul className="ingredients">
		{
			list.map((ingredient, i) => <Ingredient {...ingredient}/>)
		}
	</ul>	
	)
};

export default IngredientList;