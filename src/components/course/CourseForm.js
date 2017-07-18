import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthor, onSave, onChange, loading, errors}) => {
    return (
        <form>
            <h1>Manage course</h1>
            <TextInput
                name = "title"
                label = "Title"
                value = {course.title}
                onChange = {onChange}
                error = {errors.title}/>
            <SelectInput 
                name = "authorId"
                label= "Author"
                value = {course.authorId}
                defaultOption = "select author"
                options = {allAuthor}
                onChange ={onChange} error = {errors.authorId} />
            <TextInput 
                name = "category"
                label = "Category"
                value = {course.category}
                onChange ={onChange}
                error = {errors.category} />
            <TextInput 
                name = "length"
                label="Length"
                value = {course.length}
                onchange = {onChange}
                error = {errors.length} />        
            <input 
                type="submit"        
                disabled={loading}
                value={loading ? 'Saving...': 'Save'}
                onClick={onSave} />
        </form>
    );
}