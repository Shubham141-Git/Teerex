import TextField from "@mui/material/TextField";
import "./searchField.css";
import Box from "@mui/material/Box";

// const [searchText, setSearchText] = useState("");

const SearchField = (props) => {
  return (
    <div id="search">
      <Box
        sx={{
          width: 300,
          backgroundColor: "wheat",
        }}
      >
        <TextField
          fullWidth
          id="fullWidth"
          label="Search for products..."
          variant="standard"
          value={props.searchValue}
          onChange={props.searchHandler}
          onKeyUp={props.searchFunctionality}
        />
      </Box>
    </div>
  );
};

export default SearchField;
{
  /* <Box
sx={{
  width: 500,
  maxWidth: '100%',
}}
>
<TextField fullWidth label="fullWidth" id="fullWidth" />
</Box> */
}
