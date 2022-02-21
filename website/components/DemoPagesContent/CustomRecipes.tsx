import { SimpleGrid } from '@chakra-ui/react';
import { RecipeCard } from './RecipeCard';
import { HeadingLink } from '../HeadingLink';
import { customRecipesData } from './recipe-data';

export const CustomRecipes = () => {
  return (
    <>
      <HeadingLink as="h2" fontSize="3xl" linkProps={{ mb: 5 }}>
        Custom Recipes
      </HeadingLink>

      <SimpleGrid columns={[1, null, null, 2]} spacing={6} mb={12}>
        {customRecipesData.map((recipe, index) => (
          <RecipeCard key={recipe.headingValue + index} {...recipe} />
        ))}
      </SimpleGrid>
    </>
  );
};
