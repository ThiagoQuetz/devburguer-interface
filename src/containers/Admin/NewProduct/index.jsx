import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Image } from "@phosphor-icons/react/dist/ssr";
import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton} from './styles'

const schema = yup.object({
  firstName: yup.string().required(),
  age: yup.number().positive().integer().required(),
}).required();


export function NewProduct(){

    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
      });
      const onSubmit = data => console.log(data);

    return(
        <Container>
         <Form>
            <inputGroup>
                <Label>Nome</Label>
                <Input />
            </inputGroup>

            <inputGroup>
                <Label>Preço</Label>
                <Input />
            </inputGroup>

            <inputGroup>
                <LabelUpload>
                    <Image />
                    <input type="file" />
                </LabelUpload>
            </inputGroup>

            <inputGroup>
                <Label>Categoria</Label>
                <Select />
            </inputGroup>

            <SubmitButton>Adicionar Produto</SubmitButton>
        </Form>
        </Container>
    )
}